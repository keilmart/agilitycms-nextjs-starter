const DefaultModule = (props) => {
    const {module} = props;
    const {fields, properties} = module;
    return <div>HELLO DEVELOPER - this is only on a feature branch! Component - {properties.definitionName} not defined</div>
}

export default DefaultModule;
