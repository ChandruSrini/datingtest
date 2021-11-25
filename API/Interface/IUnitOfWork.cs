using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Interface
{
    public interface IUnitOfWork
    {
        IUserRepository UserRepository {get; }
        ILikesRepository LikesRepository {get; }
        IMessageRepository MessageRepository {get; }
        Task<bool> Complete();
        bool HasChanges();
    }
}