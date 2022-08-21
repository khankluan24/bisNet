import Button from '~/components/Button';
function MenuItem({ data, icon,className }) {
  return (
  <Button rightIcon={icon} className={className} to={data.path}>{data.name}</Button>
  );
}

export default MenuItem;
