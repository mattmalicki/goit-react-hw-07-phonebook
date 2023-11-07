import { ContactListItem } from './ContactListItem';
import styles from '../../organisms/ContactList/ContactList.module.css';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'molecules/ContactListItem',
  component: ContactListItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    item: {
      id: 1,
      name: 'Grzegorz Brzeczyszczykiewicz',
      number: '123-456-789',
    },
    classes: styles,
  },
};
