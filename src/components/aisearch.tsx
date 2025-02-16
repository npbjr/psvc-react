
import { Route, Routes } from 'react-router-dom';

import { Button, Form, ResourceProps, RestoreScrollPosition, SearchInput } from 'react-admin';
import { ResourceContextProvider } from 'react-admin';
import { ComponentType, isValidElement, ReactElement } from 'react';
import { isValidElementType } from 'react-is';

export const CustomResource = (props: ResourceProps) => {
    const { list, name } = props;

    return (
        <ResourceContextProvider value={name}>
            <Routes>
            {list && (
                    <Route
                        path="/*"
                        element={
                            
                                getElement(list)
                        }
                    />
                )}
                {props.children}
            </Routes>
        </ResourceContextProvider>
    );
};

const getElement = (ElementOrComponent: ComponentType<any> | ReactElement) => {
    if (isValidElement(ElementOrComponent)) {
        return ElementOrComponent;
    }

    if (isValidElementType(ElementOrComponent)) {
        const Element = ElementOrComponent as ComponentType<any>;
        return <Element />;
    }

    return null;
};
CustomResource.raName = 'Resource';
CustomResource.registerResource = ({
    create,
    edit,
    icon,
    list,
    name,
    options,
    show,
    recordRepresentation,
    hasCreate,
    hasEdit,
    hasShow,
}: ResourceProps) => ({
    name,
    options,
    hasList: !!list,
    hasCreate: !!create || !!hasCreate,
    hasEdit: !!edit || !!hasEdit,
    hasShow: !!show || !!hasShow,
    icon,
    recordRepresentation,
});
