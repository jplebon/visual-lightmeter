
#import "React/RCTViewManager.h"
#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(CameraModuleManager,RCTViewManager)

    RCT_EXPORT_VIEW_PROPERTY(width, NSNumber)
    RCT_EXPORT_VIEW_PROPERTY(height, NSNumber)
    RCT_EXPORT_VIEW_PROPERTY(image, NSString)
    RCT_EXTERN_METHOD(onISOChange:(float)value)
    RCT_EXTERN_METHOD(onShutterChange:(int)value)
    RCT_EXPORT_VIEW_PROPERTY(onImageReturn, RCTDirectEventBlock)

@end
