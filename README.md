# Hackaton Frontend application

## Running

- Install packages with your package-manager of preference:
  `npm install` or `yarn install`

- Starting applications:
  `npm start` will run the application at `http://localhost:3000`.

- Running tests for frontend
  `npm test` starts tests using jest, @testing-library is also used for rendering components.

------

## Installing new packages

Everything related or used at source code must be installed as a devDepedency since ReactJS code will be bundled and therefore does not need any of its packages installed inside the container.

## Code structure

- **/src (root)**

  Base files for the application.

  - `App.tsx` handles all global components.
  - `Bootstrap.tsx` ultimatelly handles global providers.

- **/src/routes**

  Uses `react-router-dom` for declaratively create all application routes.

- **/src/pages**

  Responsible for rendering a container and also be exported as default, it makes possible to lazy import a component.
  Lazy imports, when having webpack configuration, creates chunks that improve load time.

- **/src/containers**

  A component to handle ALL the logic and also build a page UI. Everytying bellow it should be stateless as possible.

  Under huge flows it might be needed to optimize bigger components that re-render too much with same props under a container, React.memo, React.UseCallback, React.useMemo can be used to prevent unnecessary work.

- **/src/components**

  Divided into contexts, components should be created focused in composition and reutilization, stateless as possible, decoupled and fluid.
  It helps A LOT to scale and mantain when things are isolated, small and readable.

  > A lot of them should be provided by npm packages for maximize UI consistency across applications

  Each component has its own folder always containing the same base files (new ones could be added to separate responsiblity):

  ```
  /src/components/context/MyComponent/
    index.ts              - Only for exports
    interfaces.ts         - Interfaces/types/enums related to the component
    MyComponent.tsx       - Actual component code
    MyComponent.spec.tsx  - Component`s unit tests. 100% coverage is expected.
    styles.ts             - 🎨
  ```

- **/src/services**

  Depending on how requests and handled, this would be the folder to have all logic related to it.

  - **/src/services/models**

    Request and Response contracts

- **/src/assets**

  Static assets of the applications, like images and fonts.

- **/src/common**

  Everything that can be useful for the entire application that is not a component, better organized under context.

- **/src/somethingINeed**

  New folders can be added for specific needs.

---

## Standardizations

- Husky for pre commit/push verifications
  - linter and format for code standardization
  - tests coverage
- Actual use of the changelog and bumping application version
  - It helps track changes of each version
  - Changelog documentation: https://keepachangelog.com/en/1.0.0/
  - Semver: https://semver.org/
