"use client"

import { MEDUSA_BACKEND_URL, queryClient } from "@lib/config"
import { AccountProvider } from "@lib/context/account-context"
import { CartDropdownProvider } from "@lib/context/cart-dropdown-context"
import { MobileMenuProvider } from "@lib/context/mobile-menu-context"
import { StoreProvider } from "@lib/context/store-context"
import CursorProvider from "@lib/context/cursor-context"

import { MedusaProvider, CartProvider } from "medusa-react"
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MedusaProvider
      baseUrl={MEDUSA_BACKEND_URL}
      queryClientProviderProps={{
        client: queryClient,
      }}
    >
      <CartDropdownProvider>
        <MobileMenuProvider>
          <CartProvider>
            <StoreProvider>
              <CursorProvider>
                <AccountProvider>{children}</AccountProvider>
              </CursorProvider>
            </StoreProvider>
          </CartProvider>
        </MobileMenuProvider>
      </CartDropdownProvider>
    </MedusaProvider>
  )
}
