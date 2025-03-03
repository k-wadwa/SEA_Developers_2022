import React from "react";
import { act, create } from "react-test-renderer";
import TodoForm from "../Components/TodoForm";

jest.mock("../Components/utils/DateCreated", () => {
    return function MockDateCreated() {
        return <span testid='dateCreated'>Date Created Component</span>
    };
});



describe('Todoform test suite', () => {
    let submitTodo;
    beforeEach(() => {
        submitTodo = jest.fn();
    });
    describe('DateCreated function and render tests', () => {
        test('it should render a DateCreated component a date', () => {
            const testRenderer = create(<TodoForm />);
            const testInstance = testRenderer.root;
            const dateCreated = testInstance.find(el => el.type === 'span' && el.props.testid === 'dateCreated');
            expect(dateCreated).toBeTruthy();
            expect(dateCreated.children).toContain('Date Created Component');
        })
    })

    describe('onChange event tests', () => {
        test('it should render the new value in the input when todoDescription onChange is activated', () => {
            const testValue = 'Test';
            const testRenderer = create(<TodoForm />);
            const testInstance = testRenderer.root;
            const descInput = testInstance.findByProps({ name: 'todoDescription' });
            expect(descInput.props.value).toBe('');
            act(() => descInput.props.onChange({ target: { value: testValue } }));
            expect(descInput.props.value).toBe(testValue);
        });
    });
    test('should enable the submit button when description is populated', () => {
        const testValue = "true";
        const testRenderer = create(<TodoForm />)
        const testInstance = testRenderer.root
        const descInput = testInstance.findByProps({ name: "todoDescription" })
        const submit = testInstance.findByProps({ type: "submit" })

        expect(submit.props.disabled).toEqual(true);
        expect(submit.props.className).toContain('btn-danger')
        act(() => descInput.props.onChange({ target: { value: testValue } }))
        expect(submit.props.disabled).toEqual(false)
        expect(submit.props.className).toContain('btn-primary')
    })
    describe('Form Submission Tests', () => {
        test('It should call submitTodo and reset the form on submission', async () => {
            const testRenderer = create(<TodoForm submitTodo={submitTodo} />);
            const testInstance = testRenderer.root;
            const descInput = testInstance.findByProps(
                { name: 'todoDescription' }

            );
            const descTestValue = 'Test';
            const compTestValue = true;

            const completedInput = testInstance.findByProps(
                { name: 'todoCompleted' }
            );
            const form = testInstance.findByType('form');

            await act(async () => 
                completedInput.props.onChange({ target: { checked: compTestValue } })
            );
            await act(async () => 
                descInput.props.onChange({ target: { value: descTestValue } })
            );
            await act(async () => form.props.onSubmit(new Event('form')));
            
            expect(submitTodo).toHaveBeenCalledTimes(1);
            expect(submitTodo).toHaveBeenCalledWith(descTestValue, null, compTestValue);

            expect(descInput.props.value).toBe('');

            expect(completedInput.props.checked).toBe(false);
        });
    });
});