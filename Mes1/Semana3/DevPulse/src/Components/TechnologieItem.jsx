function TechnologieItem({ tech, onDelete }) {
  return (
    <span className='flex items-center gap-2 text-sm'>
      {tech}
      <button
        className='text-muted-foreground underline decoration-foreground/25 underline-offset-[3px] hover:text-foreground hover:decoration-foreground/50'
        onClick={() => onDelete(tech)}
      >
        Delete
      </button>
    </span>
  )
}

export default TechnologieItem
