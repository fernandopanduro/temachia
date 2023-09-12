import React from "react";

interface Props {
  showModalPay: boolean;
  setShowModalPay: boolean;
}

export const ModalPay: React.FC<Props> = ({
  showModalPay,
  setShowModalPay,
}) => {
  return (
    <aside
      className="absolute inset-0 text-white transition-all"
      style={
        showModalPay
          ? { opacity: 1, visibility: "visible", zIndex: "1" }
          : { opacity: 0, visibility: "hidden", zIndex: "-1" }
      }>
      <div
        data-state="open"
        className="fixed inset-0 bg-gray-300/70 dark:bg-gray-600/70"
        style={{ pointerEvents: "auto" }}>
        <div className="grid-cols-[10px_1fr_10px] grid h-full w-full grid-rows-[minmax(10px,_1fr)_auto_minmax(10px,_1fr)] md:grid-rows-[minmax(20px,_1fr)_auto_minmax(20px,_1fr)] overflow-y-auto">
          <div
            role="dialog"
            id="radix-:r0:"
            aria-describedby="radix-:r2:"
            aria-labelledby="radix-:r1:"
            data-state="open"
            className="relative col-auto col-start-2 row-auto row-start-2 w-full rounded-lg text-left shadow-xl transition-all left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 focus-none !bg-transparent !shadow-none outline-none md:w-[672px] lg:w-[896px] xl:w-[1024px]"
            tabIndex={-1}
            style={{ pointerEvents: "auto" }}>
            <div className="">
              <div className="focus-none flex h-full flex-col items-center justify-start outline-none">
                <div className="relative">
                  <div className="flex grow justify-center bg-white dark:bg-gray-900 rounded-md flex-col items-start overflow-hidden border shadow-md dark:border-gray-700">
                    <div className="flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700">
                      <span className="text-base font-semibold sm:text-base">
                        Plan
                      </span>
                      <button
                        onClick={() => setShowModalPay(!showModalPay)}
                        className="text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="h-6 w-6"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                    <div className="grid sm:grid-cols-2">
                      <div className="relative order-2 col-span-1 border-r-0 border-t dark:border-gray-700 sm:order-1 sm:border-r sm:border-t-0">
                        <div className="p-4 flex flex-col gap-3 bg-white z-20 relative dark:bg-gray-900">
                          <div className="text-xl font-semibold justify-between items-center flex">
                            Plan Gratis
                          </div>
                          <button
                            className="opacity-50 cursor-not-allowed btn relative btn-primary dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 dark:bg-gray-500 dark:opacity-100"
                            disabled={true}>
                            <div className="flex w-full gap-2 items-center justify-center">
                              <span className="inline-block">Plan Actual</span>
                            </div>
                          </button>
                          <div className="gap-2 flex flex-row justify-start text-sm items-start">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="h-4 w-4 h-5 w-5 text-gray-400"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span className="max-w-[250px]">
                              Acceso a nuestro modelo TemachIA-3.5
                            </span>
                          </div>
                          <div className="gap-2 flex flex-row justify-start text-sm items-start">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="h-4 w-4 h-5 w-5 text-gray-400"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span className="max-w-[250px]">
                              Velocidad de respuesta estándar
                            </span>
                          </div>
                          <div className="gap-2 flex flex-row justify-start text-sm items-start sm:pb-2">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="h-4 w-4 h-5 w-5 text-gray-400"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span className="max-w-[250px]">
                              Actualizaciones periódicas del modelo
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="relative order-1 col-span-1 sm:order-2">
                        <div className="p-4 flex flex-col gap-3 bg-white z-20 relative dark:bg-gray-900">
                          <div className="text-xl font-semibold justify-between items-center flex">
                            TemachIA Plus
                            <span className="font-semibold text-gray-500">
                              USD $3/mo
                            </span>
                          </div>
                          <button className="btn relative btn-primary border-none py-3 font-semibold hover:bg-emerald-900 transition-colors">
                            <div className="flex w-full gap-2 items-center justify-center">
                              <span className="inline-block text-white">
                                Mejorar a Plus
                              </span>
                            </div>
                          </button>
                          <div className="gap-2 flex flex-row justify-start text-sm items-start">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="h-4 w-4 h-5 w-5 text-green-700"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span className="max-w-[250px]">
                              Acceso a TemachIA-4, nuestro modelo más capaz
                            </span>
                          </div>
                          <div className="gap-2 flex flex-row justify-start text-sm items-start">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="h-4 w-4 h-5 w-5 text-green-700"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span className="max-w-[250px]">
                              Respuestas rapidas
                            </span>
                          </div>
                          <div className="gap-2 flex flex-row justify-start text-sm items-start sm:pb-2">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="h-4 w-4 h-5 w-5 text-green-700"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span className="max-w-[250px]">
                              Acceso exclusivo a funciones beta como Navegación,
                              Complementos y Análisis de Datos Avanzados
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
