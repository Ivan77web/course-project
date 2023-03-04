import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/CounterSlice';

export const Counter = () => {
    const { t } = useTranslation('delete');
    const dispatch = useAppDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div data-testid="counter">
            <h1 data-testid="value-title">{counterValue}</h1>

            <Button
                onClick={increment}
                data-testid="btn-increment"
            >
                {t('Increment')}
            </Button>

            <Button
                onClick={decrement}
                data-testid="btn-decrement"
            >
                {t('Decrement')}
            </Button>
        </div>
    );
};
