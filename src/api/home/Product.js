import { _axios } from "interceptor/http-config";

export const _Home = {
    index: async () => {
        return _axios
            .get(
                `/home/test`
            )
            .then((res) => res.data);
    },
};