import {ReactElement} from 'react';
import {render, RenderOptions} from '@testing-library/react';
import {queries, queryHelpers} from '@testing-library/react';

const customRender = (ui: ReactElement<any>, options: RenderOptions = {}) =>
  render(ui, {
    ...options,
    queries: {
      ...queries,
      getByCssSelector: (
        container: HTMLElement,
        selector: string
      ): HTMLElement => {
        const el = container.querySelector(selector);
        if (!el) {
          throw queryHelpers.getElementError(
            `Unable to find an element by: ${selector}`,
            container
          );
        }
        return el as HTMLElement;
      }
    }
  });

// re-export everything
export * from '@testing-library/react';
// override render method
export {customRender as render};
