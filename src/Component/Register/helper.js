export const createAccount = (data) => {
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const fetchAPI = async () => {
        try {
            const response = await fetch('http://localhost:8000/users')
            const getData1 = await response.json()
            const isExistAccount = getData1.find(item=>item.email == data.email)
            if(isExistAccount){
                console.log("Dang ky khong duoc")
                throw("Tài khoản đã có người sử dụng")
            }  
            const res = await fetch('http://localhost:8000/users', option)
            if(res) return true
        }
        catch (e) {
            return false
        }
    }
    return fetchAPI()
}