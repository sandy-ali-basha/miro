import { useQuery } from "react-query";
import { _Banner } from "api/home/banner";

export const useBanner = () => {
    const { data, isLoading } = useQuery(
        ["banner"],
        () => _Banner.index().then((res) => res),
        {
            keepPreviousData: true,
        }
    );
    return {
        data,
        isLoading,
    };
};
