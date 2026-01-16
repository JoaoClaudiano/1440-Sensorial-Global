// Inicialização do Supabase
const SUPABASE_URL = 'https://eheyuoeagrfvqxgpmaex.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_1qg0L7fR4drbzru3sQmqtQ_eCTCZECn';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Busca mensagens existentes (últimas 100)
async function fetchMessages() {
  const { data, error } = await supabaseClient.from('messages')
    .select('*').order('inserted_at',{ascending:false}).limit(100);
  if(error) console.error(error);
  return data || [];
}

// Subscribe em tempo real
function subscribeMessages(onNew) {
  supabaseClient.channel('public:messages')
    .on('postgres_changes', { event:'INSERT', schema:'public', table:'messages' }, payload => {
      onNew(payload.new);
    }).subscribe();
}