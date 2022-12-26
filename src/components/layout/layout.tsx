import React, { FC, PropsWithChildren } from 'react'

export const Layout : FC<PropsWithChildren> = ({ children }) => {

    return(
        <main>{children}</main>
    )
}
