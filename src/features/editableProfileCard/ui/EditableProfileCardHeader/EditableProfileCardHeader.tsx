import { memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { EditableProfileCardHeaderRedesigned } from '../EditableProfileCardHeaderRedesigned/EditableProfileCardHeaderRedesigned';
import { EditableProfileCardHeaderDeprecated } from '../EditableProfileCardHeaderDeprecated/EditableProfileCardHeaderDeprecated';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <EditableProfileCardHeaderRedesigned {...props} />
            )}
            off={(
                <EditableProfileCardHeaderDeprecated {...props} />
            )}
        />
    );
});
