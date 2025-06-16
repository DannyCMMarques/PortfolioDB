const ContainerComponent = ({ children }: React.PropsWithChildren<object>) => {
    return (
        <div className="w-full bg-white h-auto p-4 rounded-lg">
            {children}
        </div>);
};

export default ContainerComponent;
