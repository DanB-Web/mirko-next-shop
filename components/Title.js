/*
Note that by destructuring the default 'children' prop we can pass various h1 values into the component tags when using it
*/

const Title = ({ children }) => {
  return (
    <h1 className='text-2xl pb-4'>
        {children}
    </h1>
  )
}

export default Title