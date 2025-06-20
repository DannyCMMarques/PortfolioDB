import { useEffect, useRef } from "react";

export function useFormularioEdicao<T>({
    id,
    getById,
    reset,
    onSetExtraState,
}: {
    id?: number;
    getById: (id: number) => Promise<T>;
    reset: (values: Partial<T>) => void;
    onSetExtraState?: (data: T) => void;
}) {
    const fetched = useRef(false);

    useEffect(() => {
        if (id && !fetched.current) {
            getById(id).then((data) => {
                reset(data);
                if (onSetExtraState) onSetExtraState(data);
                fetched.current = true;
            });
        }
    }, [id, getById, reset, onSetExtraState]);
}
