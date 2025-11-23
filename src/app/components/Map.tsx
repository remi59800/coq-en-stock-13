export default function Map() {
  return (
    <div className='w-full h-full'>
      <iframe
        style={{ border: 0, minHeight: '400px' }}
        title='Carte de la boutique Coq en Stock'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4967.741825357611!2d5.365495610977606!3d43.30336577486746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c125c0ff85d1%3A0xc2a6fcb2716c1936!2sR%C3%B4tisserie%20Coq%20en%20stock!5e0!3m2!1sfr!2sfr!4v1746351092816!5m2!1sfr!2sfr'
        width='100%'
        height='100%'
        loading='eager'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
}
