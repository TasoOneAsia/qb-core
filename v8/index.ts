// Need to use require syntax here for ESBuild, as it isn't able to accurate analyze
// when a async ESM package should be imported for bundling.

global.V8_DEV_MODE = GetConvarInt("qb-core:DebugV8", 0) == 1;

require("./update/main");
