#pragma once

#include "RNOH/generated/BaseReactNativeVibrationFeedbackPackage.h"

namespace rnoh {

class ReactNativeVibrationFeedbackPackage : public BaseReactNativeVibrationFeedbackPackage {
    using Super = BaseReactNativeVibrationFeedbackPackage;

public:
    ReactNativeVibrationFeedbackPackage(Package::Context ctx) : Super(ctx) {}
};

} // namespace rnoh