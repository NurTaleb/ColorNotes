export const colorOptions = [
  { name: 'Blue', value: 'bg-blue-100', label: 'Study Materials' },
  { name: 'Red', value: 'bg-red-100', label: 'Needs Clarification' },
  { name: 'Yellow', value: 'bg-yellow-100', label: 'Ongoing Projects' },
  { name: 'Green', value: 'bg-green-100', label: 'Tasks Completed' },
];

export const getColorInfo = (colorValue: string) => {
  return colorOptions.find(option => option.value === colorValue) || colorOptions[0];
};