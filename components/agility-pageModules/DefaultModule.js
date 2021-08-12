const DefaultModule = (props) => {
    const {module} = props;
    const {fields, properties} = module;
    return <div>Component - {properties.definitionName} not defined</div>
}

export default DefaultModule;