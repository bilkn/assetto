import CustomButton from '.';

export default {
  title: 'Button',
  component: CustomButton,
};

const Template = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'outlined',
  color: 'primary',
};
