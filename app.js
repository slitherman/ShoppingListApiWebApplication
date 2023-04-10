const api = axios.create({
  baseURL: 'https://myshoppinglistapi.azurewebsites.net/api',
});

const app = Vue.createApp({
  data() {
    return {
      url: "/ShoppingLists",
      addmessage: "",
      deletemessage: "",
      getmessage:"",
      addObj: { 
        Id: 0,
        Price: 0,
        Quantity: 0,
        Name: "",
      },
      deleteId: 0,
      hello: "HelloWorld"
    }
  },
  methods: {
    async GetAll() {
      try {
        const response = await api.get(this.url)
        this.getmessage = "response " + response.status + " " + response.statusText
      } catch(ex) {
        alert(ex.message)
      }
    },
    async Add() {
      const addurl = this.url + "/users/"
      try {
        const response = await api.post(addurl, this.addObj)
        this.addmessage = "response " + response.status + " " + response.statusText
      } catch(ex) {
        alert(ex.message)
      }
    },
    async SumOFItems() {
      try {
        const itemUrl = this.url + "/totalsum"
        const response = await api.get(itemUrl)
        this.getmessage = "response " + response.status + " " + response.statusText
      } catch(ex) {
        alert(ex.message)
      }
    },
    async Delete() {
      const deleteUrl = this.url + "/delete/" + this.deleteId
      try {
        const response = await api.delete(deleteUrl)
        this.deletemessage = "response " + response.status + " " + response.statusText
      } catch(ex) {
        alert(ex.message)
      }
    }
  },
}).mount("#app");
