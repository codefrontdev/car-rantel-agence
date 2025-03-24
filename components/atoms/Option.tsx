/** @format */

interface OptionProps {
  label: string;
  onClick: () => void;
}

const Option: React.FC<OptionProps> = ({ label, onClick }) => {
  return (
    <>
      <li>
        <a
        onClick={onClick}
          href='#'
          className='block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'
          role='menuitem'>
          <div className='inline-flex items-center uppercase'>
            {label}
          </div>
        </a>
      </li>
    </>
  );
};

export default Option;
