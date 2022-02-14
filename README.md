








## Table of contents

- [1. Background](#1-background---motivation)
- [2. Front and Backend](#2-front-and-backend)
- [3. Hardware instructions and Concurrency](#3-hardware-instructions-and-concurrency)
- [4. What's Next](#4-whats-next)



## 1. Background - Motivation


Visual Lightmeter is an app designed to provide a virtual lightmeter for photographers who use analog cameras. Though there are other apps like this, my intention was to provide a lightmeter that actually showed a preview of what the end result would look like, a feature that seems to lack on the lightmeter apps I've used in the past. These apps provide suggestions for exposure settings based on what the camera is pointing at, but users never get to see what image those settings yield. Visual Lightmeter, then, interacts with the phone's camera to set the exposure settings that the user chose, providing them a preview of how the image will be exposed and helping them feel more secure in their decision.

The app, in its current state, features a purposefully minimal interface. Three wheels on the bottom half of the screen allow the user to manually control all three exposure settings available in any film camera, and the camera feed on the top half of the screen displays the effects of these changes. I considered letting the camera feed take up the whole screen, remaining visible behind the three wheels, but decided not to in the name of accessibility for users who might need high contrast visuals. 


## 2. Front and backend

The app's user interface was written in React Native, and the interactions with the camera were handled in Swift. The use of Swift, though enjoyable, was out of necessity; Apple only lets you interact with their devices' cameras via their AVFoundation API, and that is only available in Swift and Objective-C. Since existing React libraries for cameras did not offer the functionality I needed, I had to write it myself. Bridging Swift's UI Components with React was by far the most tedious part of this process due to the alarming lack of proper documentation on the matter, and the amount of boilerplate code required, most of which needed to be in Objective-C. Once that was taken care of, however, writing Swift code with AVFoundation was fairly intuitive, and producing readable code with it was not a challenge.

## 3. Hardware instructions and concurrency

The code I wrote to interact with the camera involved a fair number of interesting concurrency-related challenges that took some time to figure out. One of these was realizing that React Native, by default, initializes native modules and UI components on background threads (as Javascript code, which is given higher priority, executes along with it), and that you need to instruct React to initialize these native components on the main thread (and before anything else) in order for them to work properly.

The methods to change ISO and shutter speed required another small reserach session. It turns out that in order to reliably change the camera's exposure settings, with assurance that they won't be overriden by or become entangled with method calls on other threads, specific instructions need to be written to give these two methods exclusive access to the camera for the duration of their execution. In other words, any other threads that might want to change the current exposure settings lose their ability to do so until a given method is done making its desired modification. Upon finishing a modification, an instruction is given at the end of the method to unlock the camera for configuration once again. This allows for a neat, sequential modification of the three exposure settings.

## 4. What's next

Plans for future improvements include a separate page for more details on what ISO, shutter speed, and aperture all mean and their effects on a photo, as well as changes to the internal native code to increase speed. Eventually, after a satisfying amount of testing, I'd like to publish the app on the App store.
