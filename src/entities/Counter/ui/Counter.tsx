import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    const { t } = useTranslation();
    const { add, decrement, increment } = useCounterActions();

    const incr = () => {
        increment();
    };

    const decr = () => {
        decrement();
    };

    const addFive = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                onClick={incr}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decr}
            >
                {t('decrement')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={addFive}
            >
                {t('add five')}
            </Button>
        </div>
    );
};
