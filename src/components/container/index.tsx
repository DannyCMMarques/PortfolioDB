import type { ContainerProps } from "../interfaces/interfacesComponents";

const Container = ({ children }:ContainerProps ) => {
    return (
        <div className="w-4/5 m-auto pb-20" >{children}</div>
    )
}

export default Container;