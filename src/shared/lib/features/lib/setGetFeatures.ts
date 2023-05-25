import { FeatureFlags } from '@/shared/types/featureFlags';

let featureFlags: FeatureFlags = {};

export function setFeatureFlags(newFlags?: FeatureFlags) {
    if (newFlags) {
        featureFlags = newFlags;
    }
}

export function getFeatureFlags(flag: keyof FeatureFlags) {
    return featureFlags[flag] ?? true;
}

export function getAllFeatureFlags() {
    return featureFlags;
}
