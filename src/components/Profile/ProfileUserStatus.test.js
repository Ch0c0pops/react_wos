import TestRenderer from 'react-test-renderer';
import ProfileUserStatus from "./ProfileUserStatus";

describe('userstatus component testing', () => {


    test('component should render span from the start', () => {
        const component = TestRenderer.create(<ProfileUserStatus/>)
        const root = component.root

        expect(root.findByType("span").length).toEqual(1);

        // const testRenderer = TestRenderer.create(<ProfileUserStatus />);
        // const testInstance = testRenderer.root;
        //
        // expect(testInstance.findByType('span')).toBe('bar');
    })
})
