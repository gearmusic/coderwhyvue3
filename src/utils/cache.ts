class LocalCatche {
  setCatche(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCatche(key: string) {
    const value = window.localStorage.getItem(key)
    if(value) {
      return JSON.parse(value)
    }
  }

  deleteCatch(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCatch() {
    window.localStorage.clear()
  }
}

export default new LocalCatche()
