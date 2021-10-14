import { stripIndents } from "common-tags";
import { ReleaseType } from "semver";

const RESOURCE_PREFIX = `^3[QB-Core]^0`;
const RELEASE_URL = "https://github.com/qbcore-framework/qb-core";

export const messageTemplates = {
  outOfDate: (
    remoteVersion: string,
    localVersion: string,
    diffType: ReleaseType
  ) => stripIndents`
    ^1===============================================================================^0

      Your version of ${RESOURCE_PREFIX} is currently ^1outdated^0

      The latest version is ^2${remoteVersion}^0, your version is ^1${localVersion}^0

      This is considered a ^3"${diffType.toUpperCase()}"^0 version change.

      You can find the latest version at ^2${RELEASE_URL}^0

    ^1===============================================================================^0
  `,
  prerelease: (remoteVersion: string, localVersion: string) => stripIndents`
    ^1===============================================================================^0

      You may be using a pre-release version of ${RESOURCE_PREFIX} as your version
      is higher than the latest stable GitHub release.

      Your version: ^1${localVersion}^0
      GitHub version: ^2${remoteVersion}^0

    ^1===============================================================================^0
  `,
  isUpdated: (version: string) =>
    `${RESOURCE_PREFIX} (v${version}) is up to date and has started sucessfully!`,
  badResponseCode: (respCode: number) =>
    `${RESOURCE_PREFIX} ^1There was an error while attempting to check for updates. Code: ${respCode}^0`,
  genericError: (e: Error) =>
    stripIndents`
      ^1===============================================================================^0

        An unexpected error occured in ${RESOURCE_PREFIX} while checking for updates.
        If you see this message consistently, please file a report with the given information.

        Error: ^1${e.message}^0

      ^1===============================================================================^0
    `,
};
