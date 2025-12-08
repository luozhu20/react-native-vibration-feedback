/**
 * TurboModule Spec 定义
 * 用于 RN 0.68+ 新架构的 Codegen
 */

import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  vibrateWith(id: number): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('RNVibrationFeedback');

