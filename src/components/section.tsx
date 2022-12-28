import React, { FC, PropsWithChildren } from "react";


export const Section : FC<PropsWithChildren<Props>>  = ({children}) => (
      <section  className="flex snap-start items-center justify-center  bg-slate-500">
        {children}
        </section>
)