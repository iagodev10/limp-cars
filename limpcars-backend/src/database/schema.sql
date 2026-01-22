-- Tabela de Clientes
CREATE TABLE IF NOT EXISTS clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Serviços
CREATE TABLE IF NOT EXISTS servicos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    valor DECIMAL(10,2) NOT NULL,
    imagem_url VARCHAR(255),
    duracao_minutos INTEGER NOT NULL,
    ativo BOOLEAN DEFAULT TRUE
);

-- Tabela de Agendamentos
CREATE TABLE IF NOT EXISTS agendamento (
    id SERIAL PRIMARY KEY,
    cliente_id INTEGER NOT NULL,
    data_atendimento DATE NOT NULL,
    hora_atendimento TIME NOT NULL,
    modelo_veiculo VARCHAR(100) NOT NULL,
    status VARCHAR(20) DEFAULT 'pendente',
    observacoes TEXT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- Tabela de Relacionamento Agendamento-Serviços
CREATE TABLE IF NOT EXISTS agendamento_servicos (
    id SERIAL PRIMARY KEY,
    agendamento_id INTEGER NOT NULL,
    servico_id INTEGER NOT NULL,
    valor_cobrado DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (agendamento_id) REFERENCES agendamento(id),
    FOREIGN KEY (servico_id) REFERENCES servicos(id),
    UNIQUE(agendamento_id, servico_id)
);
