import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { themes } from '@storybook/theming';

export default {
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
    options: {
        base: 'dark',
        // appBg: '#9f84bd',
        // appContentBg: '#ede3e9',
        // appBorderColor: 'grey',
        // appBorderRadius: 4,
        /**
         * show story component as full screen
         * @type {Boolean}
         */
        isFullscreen: false,
        /**
         * display panel that shows a list of stories
         * @type {Boolean}
         */
        showNav: true,
        /**
         * display panel that shows addon configurations
         * @type {Boolean}
         */
        showPanel: true,
        /**
         * where to show the addon panel
         * @type {('bottom'|'right')}
         */
        panelPosition: 'bottom',
        /**
         * regex for finding the hierarchy separator
         * @example:
         *   null - turn off hierarchy
         *   /\// - split by `/`
         *   /\./ - split by `.`
         *   /\/|\./ - split by `/` or `.`
         * @type {Regex}
         */
        hierarchySeparator: /\/|\./,
        /**
         * regex for finding the hierarchy root separator
         * @example:
         *   null - turn off multiple hierarchy roots
         *   /\|/ - split by `|`
         * @type {Regex}
         */
        hierarchyRootSeparator: /\|/,
        /**
         * sidebar tree animations
         * @type {Boolean}
         */
        sidebarAnimations: true,
        /**
         * enable/disable shortcuts
         * @type {Boolean}
         */
        enableShortcuts: true,
        /**
         * show/hide tool bar
         * @type {Boolean}
         */
        isToolshown: true,
        /**
         * theme storybook, see link below
         */
        // theme: themes.dark,
        /**
         * function to sort stories in the tree view
         * common use is alphabetical `(a, b) => a[1].id.localeCompare(b[1].id)`
         * if left undefined, then the order in which the stories are imported will
         * be the order they display
         * @type {Function}
         */
        storySort: undefined,
    },
};
