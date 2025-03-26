declare global {
    const Sentry: {
        captureMessage: (message: string) => void
        captureException: (error: Error) => void
    }

    interface Window {
        __BUILD_DATE__: string
        __BUILD_HASH__: string
        __APP_VERSION__: string

        __DEBUG__: boolean
        BASE_TITLE: string
        _VH_OFFSET: number
        _useragent: {ios: string; safari: string; no_keyboard: string}
        router_initialized: boolean
    }
    interface Document {
        startViewTransition: (cb) => void
    }
}
export {}
