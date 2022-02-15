import Foundation
import AVFoundation

@available(iOS 10.0, *)
@objc(CameraModuleManager)
public class CameraModuleManager: RCTViewManager {
  
  
  override public static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  var captureSession: AVCaptureSession!
  var stillImageOutput: AVCapturePhotoOutput!
  var videoPreviewLayer: AVCaptureVideoPreviewLayer!
  var camerapreview: CameraPreview!
  
  var delegate : CameraAction?
  
  
  override init() {
    super.init()
    self.delegate = self
    camerapreview = CameraPreview(frame: CGRect(x: 0, y: 0, width: 400, height: 400), delegate: delegate!)
    captureSession = AVCaptureSession()
    captureSession.sessionPreset = .photo
    guard let backCamera = AVCaptureDevice.default(for: AVMediaType.video) else {return}
    
    do {
      let input = try AVCaptureDeviceInput(device: backCamera)
      stillImageOutput = AVCapturePhotoOutput()
      
      if captureSession.canAddInput(input) && self.captureSession.canAddOutput(stillImageOutput) {
        captureSession.addInput(input)
        captureSession.addOutput(stillImageOutput)
        self.setupLivePreview()
      }
    }
    catch let error  {
      print("Error Unable to initialize back camera:  \(error.localizedDescription)")
    }
  }
  
  func setupLivePreview() {
    
    videoPreviewLayer = AVCaptureVideoPreviewLayer(session: captureSession)
    
    videoPreviewLayer.videoGravity = .resizeAspectFill
    videoPreviewLayer.connection?.videoOrientation = .portrait
    camerapreview.layer.addSublayer(videoPreviewLayer)
    
    DispatchQueue.global(qos: .userInitiated).async {
      self.captureSession.startRunning()
    }
    
    DispatchQueue.main.async {
      self.videoPreviewLayer.frame = self.camerapreview.bounds
    }
  }
  
  override public func view() -> UIView! {
      return camerapreview
    }
  
  @objc func onISOChange(_ value: Float) {
    self.changeISO(value: value)
  }
  
  @objc func onShutterChange(_ value: Int32) {
    self.changeShutterSpeed(value: value)
  }

}

@available(iOS 10.0, *)
extension CameraModuleManager: CameraAction {
  
  public func changeISO(value: Float) {
    
    guard let device = AVCaptureDevice.default(for: AVMediaType.video) else { return }
    if device.isExposureModeSupported(.custom) {
      do {
        try
        device.lockForConfiguration() //gives method exclusive access to the camera, to modify its exposure settings without being overriden
        device.setExposureModeCustom(duration: AVCaptureDevice.currentExposureDuration, iso: value, completionHandler: nil)
        device.unlockForConfiguration() //cedes exclusive access to camera to let other methods (such as changeShutterSpeed, or another call to this same method) make changes
      }
      catch let error {NSLog("Could not lock device for configuration: \(error)")}
    }
    
  }
    

  public func changeShutterSpeed(value: Int32) {
     
    guard let device = AVCaptureDevice.default(for: AVMediaType.video) else { return }
    if device.isExposureModeSupported(.custom) {
      do {
        try
        device.lockForConfiguration()
        device.setExposureModeCustom(duration: CMTimeMake(value: 1, timescale: value), iso: AVCaptureDevice.currentISO, completionHandler: nil)
        device.unlockForConfiguration()
      }
      catch let error {NSLog("Could not lock device for configuration: \(error)")}

    }

  }
  

  public func onChangeSize(_ frame: CGRect) {
    DispatchQueue.main.async {
      self.videoPreviewLayer.frame = self.camerapreview.bounds
    }
    self.videoPreviewLayer.setNeedsLayout()
  }

}


public protocol CameraAction{

  func onChangeSize(_ frame: CGRect )
  func changeISO(value: Float)
  func changeShutterSpeed(value: Int32)
}

public class CameraPreview: UIView {


  var height: NSNumber = 400
  var width : NSNumber = 400
  var delegate : CameraAction?


  @objc var onImageReturn: RCTDirectEventBlock?

  public func setImageUpdate(imagePath: String){
      onImageReturn!(["image":imagePath])
  }

  public override func reactSetFrame(_ frame: CGRect) {
    super.reactSetFrame(frame)
    delegate?.onChangeSize(frame)
  }


  @objc(setHeight:) func setHeight( _ val: NSNumber){
    self.height = val


    self.frame = CGRect(x: 0, y: 0, width: Double(self.width), height:Double(self.height))
    self.setNeedsLayout()
    self.reactSetFrame(self.frame)
  }

  @objc(setWidth:) func setWidth(_ val: NSNumber){
    self.width = val


    self.frame = CGRect(x: 0, y: 0, width: Double(self.width), height:Double(self.height))
    self.setNeedsLayout()
    self.reactSetFrame(self.frame)
  }


  init(frame: CGRect, delegate: CameraAction) {
    super.init(frame: frame)
    self.delegate = delegate

    self.backgroundColor = UIColor.blue
  }

  //XCode boilerplate
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }

}
