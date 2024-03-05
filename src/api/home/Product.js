import { _axios } from "interceptor/http-config";

export const _product = {
    index: async () => {
        return _axios
            .get(
                `user/product/home-products`, {
                headers: {
                    lang: ["en", "ar"].includes(
                        localStorage.getItem("i18nextLng")
                    )
                        ? localStorage.getItem("i18nextLng")
                        : "en"
                }
            }
            )
            .then((res) => res.data);
    },
};