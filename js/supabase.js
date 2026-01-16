const SUPABASE_URL = 'https://eheyuoeagrfvqxgpmaex.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_1qg0L7fR4drbzru3sQmqtQ_eCTCZECn';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Função exemplo para buscar mensagens
async function fetchMessages() {
  const {data,error} = await supabaseClient.from('messages').select('*').order('inserted_at',{ascending:false});
  if(error) return console.error(error);
  return data;
}