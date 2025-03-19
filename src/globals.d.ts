declare global {
    const Sentry: {
        captureMessage: (message: string) => void
        captureException: (error: Error) => void
    }

    interface Window {
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
