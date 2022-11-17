import RequestException from "./exceptions/request-exception.js";

export async function getJason(url) {
    try {
        const response = await fetch(url)
        const jsonBody = await response.json()
        return jsonBody
    }
    catch (e) {
        throw new RequestException("Erro ao realizar requisição")
    }
}