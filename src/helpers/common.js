export function main(){
  if (process.env.NODE_ENV !== 'production') {
    console.log('Dev mode enabled.');
  }
}

export function isProd(){
  return process.env.NODE_ENV === 'production'
}