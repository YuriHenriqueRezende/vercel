export type pagina<T> = {
    count: number;
    next: number|null;
    previous: number|null;
    results: Array<T>

}