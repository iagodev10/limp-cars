create table if not exists clientes(
    id integer primary key autoincrement,
    nome varchar(100) not null,
    telefone varchar(20) not null,
    criado_em datetime default current_timestamp
);

create table if not exists servicos(
    id integer primary key autoincrement,
    nome varchar(100) not null,
    descricao text,
    valor decimal(10,2) not null,
    imagem_url varchar(255),
    duracao_minutos integer not null,
    ativo boolean default 1
);

create table if not exists agendamento(
    id integer primary key autoincrement,
    cliente_id integer not null,
    data_atendimento date not null,
    hora_atendimento time not null,
    modelo_veiculo varchar(100) not null,
    status varchar(20) default 'pendente',
    observacoes text,
    criado_em datetime default current_timestamp,
    foreign key (cliente_id) references clientes(id)
);

create table if not exists agendamento_servicos(
    id integer primary key autoincrement,
    agendamento_id integer not null,
    servico_id integer not null,
    valor_cobrado decimal(10,2) not null,
    FOREIGN KEY(agendamento_id) REFERENCES agendamento(id),
    FOREIGN KEY(servico_id) REFERENCES servicos(id),
    unique(agendamento_id, servico_id)
);

