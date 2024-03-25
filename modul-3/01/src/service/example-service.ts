export default class ExampletService {
  getData() {
    return 'Get data using express'
  }

  postData() {
    return 'Post data using express'
  }

  putData(id: number) {
    return `Put data ${id} using express`
  }

  deleteData(id: number) {
    return `Delete data ${id} using express`
  }

  patchData(id: number) {
    return `Patch data ${id} using express`
  }
}