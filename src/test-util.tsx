import { render, type RenderOptions } from '@testing-library/react'
import { type ReactElement } from 'react'
import { AppProviders } from './providers/app-provider'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AppProviders, ...options })

// re-export everything
// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'

// override render method
export { customRender as render }
