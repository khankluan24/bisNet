import Button from '~/components/Button';
function MenuItem({ data, className, titleClass }) {
  return (
    <Button
      rightIcon={data.rightIcon ? data.rightIcon : ''}
      leftIcon={data.leftIcon ? data.leftIcon : ''}
      className={className}
      titleClass ={titleClass}
      to={data.path}
    >
      {data.name}
    </Button>
  );
}

export default MenuItem;
