declare module 'mem-fs' {
  interface MemFs {
    create (): any
  }
  const memFs: MemFs
  export = memFs
}
